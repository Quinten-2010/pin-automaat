def on_button_pressed_a():
    music.play_melody("D D - D C5 - C5 C5 ", 369)
    music.play_melody("- D E C5 - - - - ", 200)
input.on_button_pressed(Button.A, on_button_pressed_a)

music.play_melody("E D G F B A C5 B ", 120)
music.play_melody("C D E F C C5 - C5 ", 120)

def on_forever():
    pass
basic.forever(on_forever)
ESP8266_IoT.connect_wifi("your_ssid", "your_pwd")
smarthome.uv_level(AnalogPin.P0)
smarthome.dht11_sensor(DigitalPin.P0, smarthome.DHT11_state.DHT11_TEMPERATURE_C)
