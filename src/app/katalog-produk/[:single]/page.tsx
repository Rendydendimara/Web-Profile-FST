'use client'

import config from "@/config/config.json";
import { PRIMARY_COLOR } from "@/constant";
import { getSinglePage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { Post } from "@/types";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react'
import Link from "next/link";
import { MdLocalShipping } from 'react-icons/md'

const DetailKatalogProduk = ({ params }: { params: { single: string } }) => {
  // const posts: Post[] = getSinglePage(blog_folder);
  // const post = posts.filter((page) => page.slug === params.single)[0];

  // const { frontmatter, content } = post;
  // const {
  //   title,
  //   meta_title,
  //   description,
  //   image,
  //   author,
  //   categories,
  //   date,
  //   tags,
  // } = frontmatter;
  // const similarPosts = similerItems(post, posts, post.slug!);

  return (
    <>
      <SeoMeta
        title="Rumput Laut Aiha"
        meta_title="Rumput Laut Aiha"
        description="Rumput Laut Aiha"
        image="/images/image-placeholder"
      />
      <PageHeader title="Rumput Laut Aiha" />
      <section className="section pt-7">
        <div className="container">
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}>
            <Flex>
              <Image
                rounded={'md'}
                alt={'product image'}
                src={
                  '/images/image-placeholder.png'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={{ base: '100%', sm: '400px', lg: '500px' }}
              />
            </Flex>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={'header'}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                  Stik Rumput Laut Aiha
                </Heading>
                <Link href="#">
                  <Text
                    color={PRIMARY_COLOR}
                    fontWeight={300}
                    fontSize={'2xl'}>
                    Agroteknologi
                  </Text>
                </Link>
              </Box>

              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={'column'}
                divider={
                  <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
                }>
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text fontSize={'lg'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet
                    at delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiis
                    porro, quae, quisquam quos reprehenderit velit? Natus, totam.
                  </Text>
                </VStack>
                {/* <Box>
                    <Text
                      fontSize={{ base: '16px', lg: '18px' }}
                      color={useColorModeValue('yellow.500', 'yellow.300')}
                      fontWeight={'500'}
                      textTransform={'uppercase'}
                      mb={'4'}>
                      Features
                    </Text>

                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                      <List spacing={2}>
                        <ListItem>Chronograph</ListItem>
                        <ListItem>Master Chronometer Certified</ListItem>{' '}
                        <ListItem>Tachymeter</ListItem>
                      </List>
                      <List spacing={2}>
                        <ListItem>Anti‑magnetic</ListItem>
                        <ListItem>Chronometer</ListItem>
                        <ListItem>Small seconds</ListItem>
                      </List>
                    </SimpleGrid>
                  </Box> */}
                <Box>
                  <Text
                    fontSize={{ base: '16px', lg: '18px' }}
                    color={useColorModeValue('yellow.500', 'yellow.300')}
                    fontWeight={'500'}
                    textTransform={'uppercase'}
                    mb={'4'}>
                    Detail Produk
                  </Text>

                  <List spacing={2}>
                    <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        Kontak:
                      </Text>{' '}
                      082212324324 (Arnan)
                    </ListItem>
                  </List>
                </Box>
              </Stack>
            </Stack>
          </SimpleGrid>
        </div>
      </section>
    </>
  );
};

export default DetailKatalogProduk;
