import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

// Pagina dinamica

export const getStaticPaths = async () => {
    const response = await fetch('https://platzi-avo.vercel.app/api/avo');
    const { data } = await response.json();
    const paths = data.map((item) => {
        return {params:{productId:item.id}}
    });
    return {
        paths,
        // incremental static generation
        // 404 for everything else
        fallback:false
    }
}

export const getStaticProps = async ({params}) => {
    const response = await fetch(`https://platzi-avo.vercel.app/api/avo/${params.productId}`);
    const data = await response.json();

    return {
        props: {
            product: data
        },
    }
};


export default function ProductItem({product}) {
//   const {
//     query: { productId },
//   } = useRouter();
//   const [product, setProduct] = useState(null);
//   useEffect(() => { // Client side
//     if (productId) {
//       fetch(`http://localhost:3000/api/avo/${productId}`)
//         .then((response) => response.json())
//         .then((data) => {
//           setProduct(data);
//         });
//     }
//   }, [productId]);

  if (product) {
    return (
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={product.name}
              src={product.image}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                {product.name}
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                ${product.price}
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text fontSize={"lg"}>{product.attributes.description}</Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Features
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>{product.attributes.shape}</ListItem>
                    <ListItem>{product.attributes.hardiness}</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>{product.attributes.taste}</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  } else {
    return <Spinner />;
  }
}
