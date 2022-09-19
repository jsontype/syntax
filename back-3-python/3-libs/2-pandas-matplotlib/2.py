# 판다스 x 맷플롯립

import matplotlib.pyplot as plt
import pandas as pd

df=pd.read_csv("http://goo.gl/QPDdMl")
print(df)

# x, y label
plt.xlabel('P1 Sales')
plt.ylabel('Frequency')
plt.title('Histogram of P1 Sales')

# histogram
plt.hist(df['p1sales'])
plt.show()

# scatter
plt.title('Scatterplot of P1 Sales')
plt.scatter(df['Week'], df['p1sales'], label='skitscat', color='r', marker='o', s=30)
plt.show()