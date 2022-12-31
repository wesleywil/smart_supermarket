# SmartMarket

Client can make their orders using QR codes in the products, then the client can pay in a fast way, fewer queues more time.

## Screenshots - Client Area

<div style="display:flex; justify-content:center; margin-top:1rem; margin:bottom:1rem; gap:10px; flex-wrap: wrap;">
<img src="https://i.imgur.com/R9ElQQq.png">
<img src="https://i.imgur.com/aO7vNKP.png">
</div>

## Screenshots - Admin Area

<div style="margin-top:1rem; margin:bottom:1rem;">
<img src="https://i.imgur.com/Uun5UId.png">
<img src="https://i.imgur.com/535ncmc.png">
<img src="https://i.imgur.com/Cp8ggh7.png">
</div>

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
