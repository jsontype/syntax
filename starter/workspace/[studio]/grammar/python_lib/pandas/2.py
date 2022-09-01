import matplotlib.pyplot as plt
import pandas as pd

df1 = pd.read_csv("http://goo.gl/QPDdMl")
print(df1)

plt.xlabel('P1 Sales')
plt.ylabel('Frequency')
# plt.title('P1 Sales Histogram')
# plt.hist(df1['p1sales'])

plt.title('P1 Sales Scatterplot')
plt.scatter(df1['Week'], df1['p1sales'], label='skitscat', color='r', marker='o', s=30)
plt.show()

