# 이더리움 주가예측
# 라이브러리 설치 필요 : pip install -r pom.txt
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from keras.models import Sequential
from keras.layers import LSTM, Dropout, Dense, Activation
from keras.callbacks import TensorBoard, ModelCheckpoint, ReduceLROnPlateau
import datetime

# 데이터 취득
data = pd.read_csv('dataset/eth.csv')
data.head() # 앞의 5개 취득 (확인용, 없어도 됨)

# 중간값 취득
high_prices = data['High'].values
low_prices = data['Low'].values
mid_prices = (high_prices + low_prices) / 2

# 커스토마이징
studyDay = 50 # 며칠간의 데이터를 볼 것인가.
predictDay = 1 # 내일 며칠을 예상할 것인가.

# 윈도우 생성
seq_len = studyDay # 최근 50일간의 데이터를 보고, 내일 것 1개를 예측한다.
sequence_length = seq_len + predictDay # 51개의 윈도우 필요. * app1_51개의원리.jpg 참조 = 이렇게 하나하나씩 예측하는 것.
result = []
for index in range(len(mid_prices) - sequence_length):
    result.append(mid_prices[index: index + sequence_length])

# 데이터 정규화(Normalize Data) : 정규화는 모델이 좀 더 잘 예측을 하게 하기 위해서 한다.
def normalize_windows(data):
    normalized_data = []
    for window in data:
        # 윈도우값들을 돌면서 -1을 빼주면서 정규화 : 
        # (float(p) / float(window[0])) - 1) = 0이다. 
        normalized_window = [((float(p) / float(window[0])) - 1) for p in window] 
        normalized_data.append(normalized_window)
    return np.array(normalized_data)

result = normalize_windows(result)

# 학습데이터와 테스트데이터 분할 : 트레이닝셋은 90%, 검증용 테스트셋은 전체 데이터의 10%으로 나눈다. 테스트셋은 절대 학습시 포함시키지 않는다. 검증해야하니까.
row = int(round(result.shape[0] * 0.9))
train = result[:row, :]
np.random.shuffle(train) # 순서대로 되면 머신러닝이 값에 익숙해져버리니까 랜덤으로 순서를 섞는다.

x_train = train[:, :-1] # x 트레인에 50개를 넣고
x_train = np.reshape(x_train, (x_train.shape[0], x_train.shape[1], predictDay))
y_train = train[:, -1] # 예측할 y 트레인에 1개를 넣는다.

x_test = result[row:, :-1]
x_test = np.reshape(x_test, (x_test.shape[0], x_test.shape[1], predictDay)) # ***
y_test = result[row:, -1]
# x_train 1057, 50, 1
# y_train 117, 50, 1

x_train.shape, x_test.shape # 1057일의 데이터를 가지고 학습해서, 117일의 주식 가격을 예측한다.

# 모델 빌드 : 모델에 레이어를 추가한다.
model = Sequential()
model.add(LSTM(studyDay, return_sequences=True, input_shape=(studyDay, predictDay))) # 50개의 유닛을 넣어서 학습한다.
model.add(LSTM(64, return_sequences=False)) # 64개의 유닛 : 조정하면서 성능 확인할 것
model.add(Dense(1, activation='linear')) # 아웃풋 : 50일을 학습해서 다음날 하루를 예측한다.
model.compile(loss='mse', optimizer='rmsprop')
model.summary()

# 학습
start_time = datetime.datetime.now().strftime('%Y_%m_%d_%H_%M_%S')

model.fit(x_train, y_train,
    validation_data=(x_test, y_test),
    batch_size=10, # 한번에 몇개씩 묶어서 학습시킬것인가
    epochs=20, # 20번동안 반복학습을 시킨다.
    callbacks=[ # 결과 도출 : val_loss가 낮을 수록 학습이 잘 되고 있다는 뜻
        TensorBoard(log_dir='logs/%s' % (start_time)),
        ModelCheckpoint('./models/%s_eth.h5' % (start_time), monitor='val_loss', verbose=1, save_best_only=True, mode='auto'),
        ReduceLROnPlateau(monitor='val_loss', factor=0.2, patience=5, verbose=1, mode='auto')
])

# 예측
pred = model.predict(x_test)

fig = plt.figure(facecolor='white', figsize=(20, 10))
ax = fig.add_subplot(111)
ax.plot(y_test, label='True')
ax.plot(pred, label='Prediction')
ax.legend()
plt.show() # 검증한 모델을 맷플롯립으로 보여줌

# 그러나 증권가 찌라시 등에는 대응을 못합니다.