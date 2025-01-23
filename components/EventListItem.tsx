import Feather from '@expo/vector-icons/Feather';
import { View, Text, Image } from 'react-native';

export default function EventListItem({ event }){
    return (
        <View className="p-3 gap-3">
      <View className='flex-row'>
        <View className='flex-1 gap-2'>
          <Text className="text-lg font-semibold uppercase text-amber-800">
            Wed 13, Sep - 19:30 CET
          </Text>
          <Text className="text-xl font-bold" numberOfLines={2}>
            {event.title}
          </Text>
          
          <Text className="text-gray-700">{event.location} </Text>
          
        </View>
        
        {/* Event Image */}
        <Image 
          source={{ uri: event.image }} 
          className="aspect-video w-2/5 rounded-xl">
        </Image>
      </View>

      {/* Footer */}
      <View className='flex-row gap-3'>
        <Text className="text-gray-700 mr-auto">16 Going</Text>
        <Feather name="share" size={20} color="grey" />
        <Feather name="bookmark" size={20} color="gray" />
      </View>
      </View>
    )
}