import { Center, Heading, Image, ScrollView, Text, VStack } from "@gluestack-ui/themed";

import BackgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";

export function SignUp() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
      <VStack flex={1}>
        <Image 
          source={BackgroundImg} 
          alt="Pessoas treinando"
          w="$full"
          h={624}
          defaultSource={BackgroundImg}
          position="absolute"
        />

        <Center my="$24">
          <Logo/>

          <Text color="$gray100" fontSize="$sm">
            Treine sua mente e o seu corpo.
          </Text>
        </Center>

        <VStack flex={1} px="$10" pb="$16">
          <Center flex={1} gap="$2">
            <Heading color="$gray100">Crie sua conta</Heading>
            <Input placeholder="Nome" secureTextEntry/>
            <Input placeholder="E-mail" keyboardType="email-address" autoCapitalize="none"/>
            <Input placeholder="Senha" secureTextEntry/>

            <Button title="Criar e acessar"/>
          </Center>
            <Button title="Voltar para o login" variant="outline" mt="$12" onPress={handleGoBack}/>
        </VStack>
          
      </VStack>
    </ScrollView>
  )
};
