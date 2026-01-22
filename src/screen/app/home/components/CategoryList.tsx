import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

import CategoryButton from '@app/components/CategoryButton';
import TextComponent from '@app/components/TextComponent';

import { categories } from '@app/assets/data/categories';

type Props = {
  categoryActive: any;
  onSelect: (category: any) => void;
};
function CategoryList({ categoryActive, onSelect }: Props) {
  return (
    <View style={styles.container}>
            <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false} 
                style={{padding: 10}}>
                {categories.map((category) =>
                    <CategoryButton 
                        key={category.id}
                        color={category.color}
                        icon={category.icon}
                        name={category.name}
                        isActive={category.id === categoryActive?.id}
                        onPress={() => {
                            onSelect(category)
                        }}
                    />
                )}
            </ScrollView>
    </View>
  )
}

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  scroll: {
    padding: 10,
  },
});
