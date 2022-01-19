import { Box, Badge, Image } from "@chakra-ui/react";
import Link from "next/link";

// Sample card from Airbnb

function ProductBox(product) {
  const { id, image, name, price } = product;

  return (
    <Link href={`/product/${id}`}>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={image} alt={name} />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {name}
          </Box>

          <Box>${price}</Box>
        </Box>
      </Box>
    </Link>
  );
}

export default ProductBox;
