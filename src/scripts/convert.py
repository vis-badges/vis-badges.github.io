import csv
import json

icon_intent_map = {
    "CONFIRMATION": "CheckCircle",
    "INFORMATION": "Info",
    "WARNING": "Warning"
}

icon_scope_map = {
    "DATA": "DatasetOutlined",
    "ANALYSIS": "AnalyticsOutlined",
    "VISUAL ENCODING": "BubbleChartOutlined",
    "INTERACTION": "TouchAppOutlined",
    "CONTEXT": "QueryStatsOutlined"
}

# def get_icon_topic(topics, label):
#     # Lowercase topics for matching
#     topics_lower = [t.strip().lower() for t in topics if t.strip()]
#     # Example heuristic:
#     if any("source" in t for t in topics_lower):
#         return "Source"
#     if any("availability" in t for t in topics_lower):
#         return "CloudDownload"
#     if any("attribution" in t for t in topics_lower):
#         return "Badge"
#     # Fallback based on label keywords
#     label_lower = label.lower()
#     if "data" in label_lower:
#         return "Storage"
#     if "citation" in label_lower:
#         return "LibraryBooks"
#     # Default icon if nothing matches
#     return "Label"

csv_path = 'badges.csv'
badges = []
with open(csv_path, newline='', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile)
    for idx, row in enumerate(reader, start=1):
        label = row.get("LABEL", "").strip()
        description = row.get("DESCRIPTION", "").strip()
        intent = row.get("INTENT", "").strip().upper()
        scope = row.get("SCOPE", "").strip().upper()
        topics_raw = row.get("TOPIC", "")
        topics = [t.strip() for t in topics_raw.split(",")] if topics_raw else []

        badge = {
            "badgeType": "BINARY",
            "id": str(idx),
            "label": label,
            "description": description,
            "type": scope,
            "intent": intent,
            "topics": topics,
            "link": "",
#             "iconIntent": icon_intent_map.get(intent, ""),
#             "iconScope": icon_scope_map.get(scope, ""),
#             "iconTopic": ""
        }
        badges.append(badge)

json_output_path = 'db.json'
with open(json_output_path, 'w', encoding='utf-8') as jsonfile:
    json.dump(badges, jsonfile, indent=2)

print(f"JSON file with {len(badges)} badge objects has been created at {json_output_path}.")
