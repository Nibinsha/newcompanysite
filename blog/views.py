# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

import smtplib
# Create your views here.

def index(request):

   
    if request.method == "POST":
       detail = []

       fname = request.POST.get('fname','')
       phone = request.POST.get('phone','')
       email = request.POST.get('email','')
       message = request.POST.get('message','')
       if fname != "":
          final = "NAME "+str(fname)+"        PHONE "+str(phone)+"           EMAIL "+str(email)+"        MESSAGE "+str(message)
          #mailing the details
          mail = "techstackinnovations@gmail.com"
          server = smtplib.SMTP('smtp.gmail.com', 587)
          server.starttls()
          server.login("techstackinnovations@gmail.com", "techstack123#")
          server.sendmail("techstackinnovations@gmail.com", mail,final)


    return render(request, 'index.html', {})
