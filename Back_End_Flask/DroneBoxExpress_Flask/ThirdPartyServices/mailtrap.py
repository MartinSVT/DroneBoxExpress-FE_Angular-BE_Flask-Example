import mailtrap as mt
from decouple import config


register_mail = mt.Mail(
    sender=mt.Address(
        email="droneboxexpress@demomailtrap.com", name="DroneBoxExpress Team"
    ),
    to=[],
    subject="DroneBoxExpress Registration",
    text="You have successfully made a Registration with Drone Boxe Express Ltd.",
)

register_staff = mt.Mail(
    sender=mt.Address(
        email="droneboxexpress@demomailtrap.com", name="DroneBoxExpress HR Team"
    ),
    to=[],
    subject="Welcome on Board",
    text="You have been hired by Drone Boxe Express Ltd.",
)

order_mail = mt.Mail(
    sender=mt.Address(
        email="droneboxexpress@demomailtrap.com", name="DroneBoxExpress Team"
    ),
    to=[],
    subject="Order Confirmation",
    text="We Have Received Your Order with ID: ",
)

client = mt.MailtrapClient(token=config("MAILTRAP_API_KEY"))
