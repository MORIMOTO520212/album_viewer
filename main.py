#   Author: MorimotoYuma.
#   Create: 2021.05.29
import json, tweepy, re
import pandas as pd

# 
search_query = "#奈良"
result_type = "recent" # recent - 最新ツイート | mixed - 全ツイート

with open("settings.json") as f:
    settings = json.load(f)
consumer_key    = settings["consumer_key"]
consumer_secret = settings["consumer_secret"]
access_key      = settings["access_key"]
access_secret   = settings["access_secret"]

print("tweepy loading...")
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_key, access_secret)
api = tweepy.API(auth_handler=auth)

print("tweet.csv loading...")
df = pd.read_csv("assets/tweet.csv", index_col=0)
print("complete.")

#   q: search_query     - 検索
#   result_type: recent - 最新ツイート, mixed - 全ツイート
#   items               - 取得件数 
for tweet in tweepy.Cursor(api.search, q=search_query, result_type=result_type).items(20):
    try:
        created_at = tweet.created_at # ツイート日付
        name = tweet.user.name # ユーザー名
        screen_name = tweet.user.screen_name # ユーザーID
        profile_link_color = tweet.user.profile_link_color # プロフィールカラー
        profile_image_url_https = tweet.user.profile_image_url_https # プロフィールアイコン
        hashtag_list = [hashtag['text'] for hashtag in tweet.entities["hashtags"]]
        hashtag = ','.join([hashtag['text'] for hashtag in tweet.entities["hashtags"]]) # ツイート内のハッシュタグ

        text = re.sub(hashtag.replace(",","|"), '', tweet.text)
        text = text.replace("\n","").replace("#","").replace("＃","") # コンテンツ内容
        text = re.sub("https://t.co/[a-zA-Z0-9]{10}", "", text);

        if "RT @" not in text:
            df.loc[0] = [ # データ挿入
                created_at,
                name, 
                screen_name, 
                profile_image_url_https,
                profile_link_color,
                hashtag,
                text
            ]
            df = df.shift() # 0行目シフト
            df.loc[len(df)] = ['','','','','','','']
    except Exception as e: print(str(e))


df.to_csv("assets/tweet.csv", encoding="utf-8") # 書き込み