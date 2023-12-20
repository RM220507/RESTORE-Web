import requests
from google.oauth2 import service_account
from googleapiclient.discovery import build
from datetime import datetime

# TicketSource API and Google Calendar API credentials
TICKETSOURCE_API_KEY = 'YOUR_TICKETSOURCE_API_KEY'
GOOGLE_CALENDAR_API_KEY_PATH = 'path/to/your/google-calendar-api-key.json'
GOOGLE_CALENDAR_SCOPES = ['https://www.googleapis.com/auth/calendar']

# Google Calendar ID (replace with your calendar ID)
CALENDAR_ID = 'your-calendar-id@group.calendar.google.com'

def get_ticketsource_events(venue_id):
    url = f'https://www.ticketsource.co.uk/api/v1/events?venue_id={venue_id}&api_key={TICKETSOURCE_API_KEY}'
    response = requests.get(url)
    events = response.json()
    return events['events']

def create_google_calendar_event(service, event):
    start_time = datetime.strptime(event['start_at'], "%Y-%m-%dT%H:%M:%S.%fZ").isoformat()
    end_time = datetime.strptime(event['end_at'], "%Y-%m-%dT%H:%M:%S.%fZ").isoformat()

    event_body = {
        'summary': event['name'],
        'description': event['description'],
        'start': {'dateTime': start_time, 'timeZone': 'UTC'},
        'end': {'dateTime': end_time, 'timeZone': 'UTC'},
    }

    created_event = service.events().insert(calendarId=CALENDAR_ID, body=event_body).execute()
    print(f'Event created: {created_event["htmlLink"]}')

def main():
    venue_id = 'YOUR_VENUE_ID'  # Replace with the actual venue ID
    ticketsource_events = get_ticketsource_events(venue_id)

    credentials = service_account.Credentials.from_service_account_file(
        GOOGLE_CALENDAR_API_KEY_PATH, scopes=GOOGLE_CALENDAR_SCOPES
    )
    service = build('calendar', 'v3', credentials=credentials)

    for event in ticketsource_events:
        create_google_calendar_event(service, event)

if __name__ == '__main__':
    main()