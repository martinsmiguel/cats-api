import React, { useState } from 'react';
import {
    CatImage,
    CatItem,
    Container,
    FavoriteButton,
    Title,
    TextInputStyled,
    Header,
    IconFavorite,
    CatList,
    ViewRow,
    LogoutButton,
    IconLogout,
} from './styles';
import { useBreedsQuery } from '../../../../services/catApi';
import Modal from '../../../../components/CatModal';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCat, setSelectedCat] = useState(null);

    const { data: cats, isLoading, error, fetchNextPage, hasNextPage } = useBreedsQuery();

    const handleSearch = (text: string) => {
        setSearchTerm(text);
    };

    const handleLoadMore = () => {
        fetchNextPage();
    };

    const filteredCats = cats?.pages.flatMap((page) =>
        page.data.filter((cat: any) =>
            cat.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const handleCatPress = (cat: any) => {
        setSelectedCat(cat);
    };

    const handleCloseModal = () => {
        setSelectedCat(null);
    };


    const renderCatItem = ({ item }: { item: any }) => (
        <CatItem onPress={() => handleCatPress(item)}>
            {item.image && <CatImage source={{ uri: item.image }} />}
            <Title>{item.name}</Title>
            <FavoriteButton>
                <IconFavorite name="heart" />
            </FavoriteButton>
        </CatItem>
    );

    if (isLoading) {
        return (
            <Container>
                <Title>Carregando...</Title>
            </Container>
        );
    }

    if (error) {
        return (
            <Container>
                <Title>Error ao carregar espécies</Title>
            </Container>
        );
    }

    return (
        <Container>
            <Header>
                <ViewRow>
                    <Title>Olá, Maria</Title>
                    <LogoutButton>
                        <IconLogout name="power" />
                    </LogoutButton>
                </ViewRow>
                <TextInputStyled
                    placeholder="Pesquisar por espécie"
                    value={searchTerm}
                    onChangeText={handleSearch}
                />
            </Header>
            <CatList
                data={filteredCats}
                renderItem={renderCatItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.1}
                ListFooterComponent={hasNextPage ? <Title>Carregando mais...</Title> : null}
                showsVerticalScrollIndicator={false}
            />
            {selectedCat && (
                <Modal cat={selectedCat} onClose={handleCloseModal} />
            )}
        </Container>
    );
};

export default Home;
