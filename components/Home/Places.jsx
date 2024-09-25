import { StyleSheet, Text, View, VirtualizedList } from "react-native";
import React from "react";
import HeightSpacer from "../Reusable/HeightSpacer";
import { SIZES } from "../../constants/theme";
import Country from "../Titles/Country/Country";

const Places = () => {
  const countries = [
    {
      _id: "64c62bfc65af9f8c969a8d04",
      country: "USA",
      description:
        "The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1681803531285-75db948035d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNhfGVufDB8fDB8fHww",
      region: "North America, USA",
    },
    {
      _id: "64cf2c565d14628d0ac0a2b7",
      country: "Pakistan",
      description:
        "Pakistan is a country located in South Asia. It shares borders with India, Afghanistan, Iran, and China. The country is known for its diverse culture, rich history, and breathtaking landscapes. From the mighty peaks of the Karakoram mountain range to the vast deserts of Thar, Pakistan offers a wide range of geographical wonders. Its cities, like Karachi, Lahore, and Islamabad, are bustling hubs of activity, blending modernity with tradition. Pakistan has a deep-rooted history, with ancient civilizations like the Indus Valley civilization leaving their mark. The country is also famous for its delicious cuisine, warm hospitality, and vibrant festivals.",
      imageUrl:
        "https://images.unsplash.com/photo-1658073404255-5c1da0f13f75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGFraXN0YW58ZW58MHx8MHx8fDA%3D",
      region: "South Asia, Pakistan",
    },
    {
      _id: "64cf2c935d14628d0ac0a2b9",
      country: "India",
      description:
        "India is a vast and diverse country in South Asia. It is known for its cultural heritage, historical landmarks, and geographical variety. The country boasts a rich history that dates back thousands of years, with influences from various civilizations. India's landscape ranges from the snowy peaks of the Himalayas to the lush greenery of Kerala's backwaters. The Taj Mahal, Jaipur's palaces, and the ancient temples of Varanasi are just a few of the country's iconic landmarks. Indian cuisine is famous worldwide, offering a symphony of flavors and spices. With its bustling cities, serene villages, and colorful festivals, India presents a kaleidoscope of experiences for travelers.",
      imageUrl:
        "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SW5kaWF8ZW58MHx8MHx8fDA%3D",
      region: "South Asia, India",
    },
    {
      _id: "64cf2d095d14628d0ac0a2bd",
      country: "England",
      description:
        "England, a country within the United Kingdom, is steeped in history and culture. Its capital, London, is a bustling metropolis known for its iconic landmarks, including the Tower Bridge, Buckingham Palace, and the British Museum. England's countryside is picturesque, with rolling hills, charming villages, and historical sites such as Stonehenge. The country has a rich literary heritage, with famous authors like William Shakespeare, Jane Austen, and Charles Dickens hailing from its shores. English pubs, afternoon tea, and traditional events like Wimbledon and the Changing of the Guard add to its unique charm. England's influence on politics, literature, and sport has made it a global powerhouse with a lasting legacy.",
      imageUrl:
        "https://images.unsplash.com/photo-1503079230625-8a7c589a9007?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RW5nbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
      region: "Europe, England",
    },
    {
      _id: "64cf2d4d5d14628d0ac0a2bf",
      country: "China",
      description:
        "China, the world's most populous country, is located in East Asia. With a history spanning over 5,000 years, it is one of the oldest continuous civilizations. China is known for its diverse landscapes, from the majestic Great Wall winding through mountains to the breathtaking karst scenery in Guilin. Its bustling cities, like Beijing and Shanghai, showcase a unique blend of ancient traditions and modern innovations. Chinese culture is rich in art, music, and philosophy, with iconic elements such as calligraphy, tea ceremonies, and traditional Chinese medicine. The country's cuisine, including dim sum, Peking duck, and Sichuan hotpot, is celebrated globally. China's contributions to science, technology, and literature have had a profound impact on the world, making it a global powerhouse in various fields.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1664304488525-44a96338c0cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hpbmF8ZW58MHx8MHx8fDA%3D",
      region: "East Asia, China",
    },
  ];

  return (
    <View>
      <HeightSpacer height={20} />

      <VirtualizedList
        data={countries}
        horizontal
        keyExtractor={(item) => item._id}
        showsHorizontalScrollIndicator={false}
        getItemCount={(data) => data.length}
        getItem={(data, index) => data[index]}
        renderItem={({ item, index }) => (
          <View
            style={{
              marginRight: SIZES.medium,
            }}
          >
            <Country item={item} />
          </View>
        )}
      />
    </View>
  );
};

export default Places;

const styles = StyleSheet.create({});
