# SmartMarket

Client can make their orders using QR codes in the products, then the client can pay in a fast way, fewer queues more time.

## Tech Stack

**Client:** React, Redux, Redux-Toolkit, Typescript, Axios, DaisyUI, react-html5-qrcode-reader, TailwindCSS

**Server:** Python, Django, Django-Rest-Framework, qrcode, django-cors-headers, pillow

## How to Run

### Backend - Windows

```bash
  python -m venv env
  source env/scripts/activate
  pip install -r requirements.txt
  python manage.py makemigrations
  python manage.py migrate
  python manage.py createsuperuser
  python manage.py runserver
```

### Frontend

```bash
  npm install
  npm run dev
```

## Authors

- [Wesley Wilson](https://github.com/wesleywil/)
