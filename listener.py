import pyrebase
import speech_recognition as sr

config = {
  "apiKey": "",
  "authDomain": "",
  "databaseURL": "",
  "storageBucket": "",
}

firebase = pyrebase.initialize_app(config)

#get ref to auth service
auth = firebase.auth()
db = firebase.database()

listening = True
entry_num = 0

while listening:
  with sr.Microphone() as source:
    recognizer = sr.Recognizer()
    recognizer.adjust_for_ambient_noise(source)
    recognizer.dynamic_energy_threshold = 3000

    try:
      print("Listening...")
      audio = recognizer.listen(source, timeout=5.0)
      response = recognizer.recognize_google(audio)
      print(response)
      db.child("users").child("rasbpi").update({"test" + str(entry_num): response})
      entry_num += 1
    except (sr.UnknownValueError, sr.WaitTimeoutError):
      print("Didn't recognize that.")
