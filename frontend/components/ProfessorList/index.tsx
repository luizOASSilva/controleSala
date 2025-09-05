import React from 'react';
import { Text } from 'react-native';
import PaginationDot from 'react-native-animated-pagination-dot';
import List from '../ui/List';
import { ProfessorContainer, ProfessorContent } from './ProfessorList.styles';
import { ProfessorListProps } from './ProfessorList.types';

const ProfessorList = ({ professors }: ProfessorListProps) => {
  return (
    <List
      data={professors}
      keyExtractor={(item) => item.nome}
      renderItem={({ item }) => (
        <ProfessorContainer>
          <ProfessorContent>
            <Text>{item.nome}</Text>
            <PaginationDot activeDotColor={'green'} curPage={0} maxPage={1} />
          </ProfessorContent>
        </ProfessorContainer>
      )}
    />
  );
};

export default ProfessorList;
