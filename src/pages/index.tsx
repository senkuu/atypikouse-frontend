import Head from "next/head";
import Image from "next/image";

import tw, { styled } from "twin.macro";

import HomeHero from "../components/HomeHero";
import ReviewCard from "../components/ReviewCard";
import Suggestions from "../components/Suggestions";

const MainContainer = styled.main`
  ${tw`w-screen`}
  background: #F9F7F2;
`;

const Container = tw.div`container mx-auto flex flex-col justify-center p-6 sm:py-12 lg:px-24 lg:py-24`;

const Title = tw.h2`font-serif text-2xl text-gray-800 md:text-5xl uppercase`;

const GreenText = tw.span`text-Green-light`;

const ResponsiveContainer = tw.div`flex flex-col mt-6 mb-4 gap-8 lg:mb-0 lg:flex-row lg:justify-between sm:mt-12`;

const ReviewsContainer = tw.div`flex flex-col gap-8 lg:items-center`;

const ImageSquareContainer = tw.div`relative w-max`;

const Square = tw.div`absolute bg-Green-default h-36 w-36`;

const BottomLeftSquare = styled(Square)`
  left: -10px;
  bottom: -5px;
`;

const TopRightSquare = styled(Square)`
  right: -10px;
  top: -10px;
`;

const Text = tw.p`font-sans text-gray-600`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Atypik House | Sélection de logements insolites premium</title>
      </Head>
      <HomeHero />
      <MainContainer>
        <Container>
          <section>
            <Title>
              Des lieux <GreenText>d’exception</GreenText>
            </Title>
            <ResponsiveContainer>
              <ImageSquareContainer>
                <BottomLeftSquare />
                <Image
                  src="/landing-left.png"
                  alt="Photo de maison atypique"
                  width={450}
                  height={300}
                />
              </ImageSquareContainer>
              <ImageSquareContainer>
                <TopRightSquare />
                <Image
                  src="/landing-right.jpg"
                  alt="Photo de maison atypique"
                  width={450}
                  height={300}
                />
              </ImageSquareContainer>
            </ResponsiveContainer>
          </section>
          <section tw="mt-24">
            <Title>Fini les mauvaises surprises !</Title>
            <ResponsiveContainer>
              <Text tw="max-w-sm md:max-w-xl text-2xl text-justify self-center">
                Atypik House ne propose qu’une sélection de lieux premium{" "}
                <GreenText>testés</GreenText> et{" "}
                <GreenText>approuvés</GreenText> par nos soins, afin de vous
                éviter au maximum les mauvaises surprises lors de votre arrivée.
                <br />
                <br />
                Une réservation sans prise de tête !
              </Text>
              <ImageSquareContainer>
                <TopRightSquare />
                <Image
                  src="/landing-right.jpg"
                  alt="Photo de maison atypique"
                  width={557}
                  height={371}
                />
              </ImageSquareContainer>
            </ResponsiveContainer>
          </section>
          <section tw="mt-24">
            <Title tw="mb-16 text-center">Vous en parlez mieux que nous</Title>
            <ReviewsContainer>
              <ReviewCard
                author={{
                  name: "Pierre D.",
                  location: "Seine-Maritime",
                  profilePictureURI:
                    "https://randomuser.me/api/portraits/men/10.jpg",
                }}
                review="Logement réservé la veille pour le week-end, tout était conforme à nos attentes. Anne-Claude nous a même fait bénéficier d’un petit-déjeuner gratuit ! C’était notre premier week-end avec AtypikHouse, mais sûrement pas le dernier !"
              />
              <ReviewCard
                author={{
                  name: "Laure C.",
                  location: "Eure",
                  profilePictureURI:
                    "https://randomuser.me/api/portraits/women/87.jpg",
                }}
                review="Logement réservé la veille pour le week-end, tout était conforme à nos attentes. Anne-Claude nous a même fait bénéficier d’un petit-déjeuner gratuit ! C’était notre premier week-end avec AtypikHouse, mais sûrement pas le dernier !"
              />
            </ReviewsContainer>
          </section>
        </Container>
        <Suggestions />
      </MainContainer>
    </>
  );
}
