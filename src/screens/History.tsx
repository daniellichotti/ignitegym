import { HistoryCard } from '@components/HistoryCard';
import { ScreenHeader } from '@components/ScreenHeader';
import { Heading, Text, VStack } from '@gluestack-ui/themed';
import React, { useState } from 'react';
import { SectionList } from 'react-native';

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: '22.07.24',
      data: ['Puxada frontal', 'Remada unilateral'],
    },
    {
      title: '23.07.24',
      data: ['Puxada frontal'],
    },
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title='Histórico de Exercicios' />

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={() => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading
            color='$gray200'
            fontSize='$md'
            mt='$10'
            mb='$3'
            fontFamily='$heading'
          >
            {section.title}
          </Heading>
        )}
        style={{ paddingHorizontal: 32 }}
        contentContainerStyle={
          exercises.length === 0
            ? { flex: 1, justifyContent: 'center' }
            : { flexGrow: 1 }
        }
        ListEmptyComponent={() => (
          <Text color='$gray100' textAlign='center'>
            Nao ha exercicios registrados ainda. {'\n'}
            Vamos fazer exercicios hoje?
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  );
}
