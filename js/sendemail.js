const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'gmail';
   const templateID = 'contact_form';

   emailjs.send(serviceID, templateID, {
    "from_name": form.name.value,
    "from_email": form.email.value,
    "message": form.message.value,
   })
    .then(() => {
      btn.value = 'Send Message';
      alert('Your message is sent!');
      document.getElementById("form").reset();
    }, (err) => {
      btn.value = 'Send Message';
      alert(JSON.stringify(err));
    });
});