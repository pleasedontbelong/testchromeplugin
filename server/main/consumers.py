from channels import Group
from sandboxes.models import Sandbox


def ws_connect(message):
    if message['path'] == "/sandboxes":
        Group('sandboxes-list').add(message.reply_channel)


def ws_receive(message):
    Group('sandboxes-list').send({'text': "something"})


def ws_disconnect(message):
    Group('sandboxes-list').discard(message.reply_channel)
