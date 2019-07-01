# Empty_MessagingAPI_GAS
It's Empty LINE Messaging API you can use instantly for GAS

◎Changed points
・No longer you need aditional libraries
・Deleted Unnecessary interfaces and functions
・Significant improvement of readability
・Objects became more loosely coupled

◎Contents
◯LINE.gs
It's a dummy messages sent from LINE.inc
It will be overwritten when get run from phone

◯Payload.gs
It includes mes-object(it stores　massages　up to 5)
and quick-object(it stores quick_reply items up to 13)

◯Reply.gs
It sends packed messages to LINE.inc

◯Leave.gs
This API can leave a joined group when you run this object

◯index.gs
doPost function is in
If an eroor occurs, doPost stores eroor messages into a log
It can also forwards a log to your empty google documents

◯message_type.gs
It may be run by post_type-object
It detects a type of sent medias
In an included example, it implements a method what sends messages to actual mes-object

◯post_type.gs
It may be run by doPost function
It detects a type of sent messages
In join method, this API run Leave-object when you joins a group
