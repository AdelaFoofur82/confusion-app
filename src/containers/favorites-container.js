import React, { useContext } from 'react';
import { View, Text } from 'react-native';

import ShowList from '../components/show-list';
import { ProgramContext } from '../services/program-context';
import { filterShows } from '../helpers/program-helpers';

import PageLayout from './page-layout';

const FavoritesContainer = ({ navigation }) => {
  const context = useContext(ProgramContext);

  const { favorites, allShows } = context;

  const propertiesConditions = [
    {
      showProperty: 'favorites',
      stateProperty: [true]
    }
  ];

  const favoriteShows = filterShows(
    allShows,
    favorites,
    propertiesConditions
  );

  const flatListRef = React.createRef();

  const program = (
    <View>
      <ShowList
        flatListRef={flatListRef}
        shows={favoriteShows}
        navigation={navigation}
      />
    </View>
  );

  const noResults = (
    <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 16 }}>
      Ningún favorito
    </Text>
  );

  return (
    <PageLayout navigation={navigation}>
      {(!favoriteShows.length) ? noResults : program}
    </PageLayout>
  );
};

export default FavoritesContainer;
