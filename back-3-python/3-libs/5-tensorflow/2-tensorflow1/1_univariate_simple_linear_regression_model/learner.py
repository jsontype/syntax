# 모듈 로드
import tensorflow as tf


# 선형 모델 클래스
class LinearModel:
    def __call__(self, x):
        return self.Weight * x + self.Bias

    def __init__(self):
        self.Weight = tf.Variable(0.)
        self.Bias = tf.Variable(0.)


# 오차(손실) 구하기 함수
def loss(y, pred):
    return tf.reduce_mean(tf.square(y - pred))


# 학습 함수
def train(linear_model, x, y, lr):
    with tf.GradientTape() as t:
        current_loss = loss(y, linear_model(x))

    lr_weight, lr_bias = t.gradient(
        current_loss, [linear_model.Weight, linear_model.Bias]
    )
    linear_model.Weight.assign_sub(lr * lr_weight)
    linear_model.Bias.assign_sub(lr * lr_bias)


# 학습 경과 표시 문자열
progress = ""


# 학습 실행 함수
def learn(xList, yList, epochs):
    linear_model = LinearModel()
    global progress

    for epoch_count in range(epochs + 1):
        real_loss = loss(yList, linear_model(xList))
        train(linear_model, xList, yList, lr=0.003)
        progress = f": {epoch_count}/{epochs}"
        if epoch_count % 100 == 0:
            print(
                f"{epoch_count}:: W:{linear_model.Weight.numpy()}" +
                f" b:{linear_model.Bias.numpy()} Loss: {real_loss.numpy()} "
            )

    progress = ""
    return (linear_model.Weight.numpy(), linear_model.Bias.numpy())
