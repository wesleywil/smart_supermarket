import qrcode
from django.db import models
from django.core.files import File
from django.db.models.signals import post_save

from PIL import Image, ImageDraw
from io import BytesIO
import random


class Product(models.Model):
    name = models.CharField(max_length=20)
    description = models.TextField()
    price = models.IntegerField()
    qrcode = models.ImageField(upload_to='products/qrcode', null=True, blank=True)

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        super().save()
        if(not self.qrcode):
            json = {"id":self.id, "name":self.name, "price":self.price}
            qr_image = qrcode.make(json)
            qr_offset = Image.new('RGB', (400, 400), 'white')
            qr_offset.paste(qr_image,(-10,-5))
            file_name = f'{self.name}-{self.id}qr.png'
            stream = BytesIO()
            qr_offset.save(stream, 'PNG')
            self.qrcode.save(file_name, File(stream),save=False)
            qr_offset.close()
            super().save(*args, **kwargs)
        super().save(*args, **kwargs)