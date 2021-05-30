import pandas as pd

df = pd.read_csv("assets/tweet.csv", index_col=0) # 読み込み

for i in range(5):
    df.loc[0] = ["Z", "Z2", i]
    df = df.shift() # 0行目シフト
    
    df.loc[len(df)] = ["", "", ""]
    print(df)