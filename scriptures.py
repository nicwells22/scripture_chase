import pandas as pd

def read_in_scriptures():
    """
    Function to read in all scripture data from CSV.
    :return: Pandas Dataframe of all scriptures
    """
    scripts = pd.read_csv('data/all_scriptures.csv', index_col=0)
    return scripts

def get_random_verse():
    """
    Function to return a random verse from all scriptures.
    :return: JSON of a single verse
    """
    all_verses = read_in_scriptures()
    verse = all_verses.sample(1)
    return verse.to_json(orient='records')
