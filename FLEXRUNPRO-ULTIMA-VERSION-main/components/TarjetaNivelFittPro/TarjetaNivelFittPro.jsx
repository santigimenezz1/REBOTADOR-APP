import { ImageBackground, Pressable, Text, View } from "react-native";
import { useContext } from "react";
import { CartContext } from "../../Context/Context.jsx";
import styles from "./TarjetaNivelFittPro.js";

const TarjetaNivelFittPro = ({ data, nivelNombre, navigation, rutaNivel, fotoo }) => {
  const { idiomaActual } = useContext(CartContext);

  // Traducciones de "Nivel"
  const traduccionesNivel = {
    espana: "Nivel",
    italia: "Livello",
    francia: "Niveau",
    bandera: "Stufe",
    inglaterra: "Level",
    estadosUnidos: "Level",
    paisesBajos: "Niveau",
    portugal: "Nível",
  };

  // Obtener palabra traducida
  const palabraNivel = traduccionesNivel[idiomaActual] || "Nivel";

  // Separar "nivel1" en número
  const match = nivelNombre.match(/^([a-zA-Z]+)(\d+)$/);
  const numero = match ? match[2] : "";

  // Texto final traducido
  const nivelNombreTraducido = `${palabraNivel} ${numero}`;

  console.log("Imagen recibida:", fotoo);

  return (
    <ImageBackground
      source={{
        uri: fotoo || "https://via.placeholder.com/400x200.png?text=Sin+Imagen", // fallback
      }}
      style={styles.fondoImagen}
      imageStyle={{ borderRadius: 12 }}
    >
      {/* Capa oscura */}
      <View style={styles.overlay} />

      <Pressable
        onPress={() =>
          navigation.navigate("DetalleNivelNiveles", {
            rutaNivel,
            data,
            nivelNombre,
          })
        }
        style={styles.container__tarjetaNivel}
      >
        {/* Texto centrado */}
        <View style={styles.centroTexto}>
          <Text style={styles.text}>{nivelNombreTraducido}</Text>
        </View>
      </Pressable>
    </ImageBackground>
  );
};

export default TarjetaNivelFittPro;
