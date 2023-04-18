import tensorflow as tf
import matplotlib.pyplot as plt

"""
SAN PEDRO SULA
m^2, nº hab,baños, nº planta, ascensor (0-1), exterior (0-1), 
estado (0 no rehabilitado, 1 rehab, 2 nuevo), céntrico (0, 1), area verde, gimnasio(1,0), cantidad de parqueos, piscina(1,0),seguridad(1,0), mantenimiento(1,0)
"""
#baños, gimnasio (1,0), cantidad de parqueos, piscina (1,0), 
features = [(54, 2,B, 4, 0, 1, 0, 0),
            (152, 2,B, 4, 1, 1, 3, 1),
            (64, 3,B, 4, 0, 1, 0, 0),
            (154, 5,B, 4, 1, 1, 1, 1),
            (100, 1,B, 5, 1, 1, 1, 0),
            (140, 5,B, 2, 1, 1, 2, 0),
            (120, 3,B, 2, 1, 1, 1, 1),
            (70, 2,B, 3, 1, 1, 1, 0),
            (60, 2,B, 2, 0, 1, 1, 1),
            (129, 3,B, 18, 1, 1, 2, 1),
            (93, 1,B, 3, 1, 1, 2, 0),
            (52, 2,B, 2, 0, 1, 1, 1),
            (110, 3,B, 5, 1, 1, 1, 1),
            (63, 3,B, 2, 1, 1, 1, 0),
            (160, 1,B, 4, 1, 1, 2, 0)
            ]
targets = [750, 2000, 650, 1500, 900, 1000, 1300, 750, 900, 1800, 975, 880, 1400, 750, 1050]

capaEntrada = tf.keras.layers.Dense(units=8, input_shape=[8])
capaOculta = tf.keras.layers.Dense(units=8)
capaSalida = tf.keras.layers.Dense(units=1)

modelo = tf.keras.Sequential([capaEntrada, capaOculta, capaSalida])

modelo.compile(
    optimizer = tf.keras.optimizers.Adam(0.1),
    loss = 'mean_squared_error'
)

print('Inicio de entrenamiento...')
historial = modelo.fit(features, targets, epochs=1000, verbose=False)
print('Modelo entrenado!')

plt.xlabel('#Época')
plt.ylabel('Mágnitud de pérdida')
plt.plot(historial.history['loss'])
plt.show()

modelo.save('pisos_alquiler.h5')

