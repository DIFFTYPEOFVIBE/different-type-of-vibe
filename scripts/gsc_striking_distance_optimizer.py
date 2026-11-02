#!/usr/bin/env python3
"""
gsc_striking_distance_optimizer.py

Analyzes Search Console performance data to find "Striking Distance Keywords"
(Queries ranked between Position 5.0 and 20.0 with high impressions).
Automatically extracts these high-potential buyer terms and appends them
into 'high_intent_beat_keywords.csv' to continuously boost tag & title relevance!
"""

import os
import sys
import pandas as pd

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GSC_REPORT_PATH = os.path.join(BASE_DIR, "gsc_keywords_report.csv")
TARGET_KEYWORDS_PATH = os.path.join(BASE_DIR, "high_intent_beat_keywords.csv")

def optimize_striking_distance():
    print("🎯 Extracting Striking Distance Keywords (Positions 5.0 - 20.0)...")

    if not os.path.exists(GSC_REPORT_PATH):
        print(f"⚠️ {GSC_REPORT_PATH} not found. Skipping striking distance optimization.")
        return False

    try:
        df_gsc = pd.read_csv(GSC_REPORT_PATH)
        if df_gsc.empty or 'Search Query' not in df_gsc.columns:
            print("⚠️ GSC report is empty or missing query column.")
            return False

        # Filter striking distance queries
        striking_df = df_gsc[
            (df_gsc['Avg Position'] >= 5.0) & 
            (df_gsc['Avg Position'] <= 20.0) & 
            (df_gsc['Impressions'] > 5)
        ].copy()

        if striking_df.empty:
            print("ℹ️ No striking distance keywords found in current GSC dataset.")
            return True

        print(f"🔥 Found {len(striking_df)} striking distance keywords!")

        # Format into target keyword structure
        new_keywords = []
        for _, row in striking_df.iterrows():
            new_keywords.append({
                "Keyword": row['Search Query'],
                "Position": row['Avg Position'],
                "Search Volume": row['Impressions'],
                "CPC ($)": 0.50,
                "Traffic %": round(row['CTR (%)'], 2)
            })

        df_new = pd.DataFrame(new_keywords)

        if os.path.exists(TARGET_KEYWORDS_PATH):
            df_target = pd.read_csv(TARGET_KEYWORDS_PATH)
            df_combined = pd.concat([df_target, df_new], ignore_index=True)
            df_combined = df_combined.drop_duplicates(subset=['Keyword']).reset_index(drop=True)
        else:
            df_combined = df_new

        df_combined.to_csv(TARGET_KEYWORDS_PATH, index=False)
        print(f"✅ Successfully appended {len(striking_df)} striking distance terms to '{TARGET_KEYWORDS_PATH}'!")
        return True

    except Exception as e:
        print(f"❌ Error optimizing striking distance keywords: {e}")
        return False

if __name__ == "__main__":
    optimize_striking_distance()
