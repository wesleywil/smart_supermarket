import qrcode
from django.db import models
from django.core.files import File

from PIL import Image, ImageDraw
from io import BytesIO


class Product(models.Model):
    name = models.CharField(max_length=20)
    description = models.TextField()
    price = models.DecimalField(max_digits=4, default=0.00, decimal_places=2)
    qrcode = models.ImageField(upload_to='products/qrcode', null=True, blank=True)

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
       qr_image = qrcode.make(self.name)
       qr_offset = Image.new('RGB', (310, 310), 'white')
       draw_img = ImageDraw.Draw(qr_offset)
       qr_offset.paste(qr_image)
       file_name = f'{self.name}-{self.id}qr.png'
       stream = BytesIO()
       qr_offset.save(stream, 'PNG')
       self.qrcode.save(file_name, File(stream),save=False)
       qr_offset.close()
       super().save(*args, **kwargs)