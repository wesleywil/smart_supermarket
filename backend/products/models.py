from django.db import models

from PIL import Image

class Product(models.Model):
    name = models.CharField(max_length=20)
    description = models.TextField()
    price = models.DecimalField(max_digits=4, default=0.00, decimal_places=2)
    qrcode = models.ImageField(upload_to='products/qrcode')

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        super().save()
        img = Image.open(self.qrcode.path)
        if img.height > 400 or img.width > 400:
            new_img = (400, 400)
            img.thumbnail(new_img)
            img.save(self.qrcode.path)