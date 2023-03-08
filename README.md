# WPT-For-Resource-Initiator-Project
The given test checks whether a browser has implemented a `fetchID` attribute in the Resource Timing Object.

Also it checks whether a Browser has implememted `initiator` attribute in a similar fashion.

Once Ensuring that the browser has implemented supported for above mentioned features, We move on to check whether the `initiator` attribute was working as expected . This was achieved by comparing the parent's fetchID with the resource's `initiator` attribute .If they are equal then we consider the test passed otherwise the test fails.
