import { useState } from 'react';
import { Repo } from '../../queries/repos/types';
import {
  CardLayout,
  CardButton,
  Column,
  Row,
  Title,
  Topic,
  Icon,
  Image
} from './styles'
import Icons from '../../utils/Icons';

type CardProps = {
  repo: Repo;
  addToFavorites: (id: number) => void;
  removeFromFavorites: (id: number) => void;
  isFavorite: boolean;
}

interface IconsInterface {
  [key: string]: string
}

export default function Card({ repo, addToFavorites, isFavorite, removeFromFavorites }: CardProps) {
  const [preview, setPreview] = useState(`https://raw.githubusercontent.com/${repo?.owner?.login}/${repo?.name}/master/src/assets/preview.jpg`);
  
  const setDefault = () => {
    setPreview('https://miro.medium.com/max/800/1*hFwwQAW45673VGKrMPE2qQ.png')
  }
  
  const icons: IconsInterface = Icons;
  const lang = repo?.language?.toLowerCase();

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(repo.id);
    } else {
      addToFavorites(repo.id);
    }
  }

  const goToRepo = (url: string) => {
    window.open(url, '_blank');
  }

  return (
    <CardLayout>
      <Image src={preview} alt="the image must be this way src/assets/preview.jpg" onError={setDefault} />
      <Column>
        <Title>{repo.name}</Title>
        <Icon src={icons[lang]} />
        <Row>{repo?.topics.map((topic, index) => <Topic key={index}>{topic}</Topic>)}</Row>
      </Column>
      <Column>
          <CardButton onClick={handleToggleFavorite}>
            {!isFavorite ? <Icon src={Icons.starEmpty} /> : <Icon src={Icons.starFull} />}
          </CardButton>
          <CardButton onClick={() => goToRepo(repo.html_url)}>
            <Icon src={Icons.link} />
          </CardButton>
      </Column>
    </CardLayout>
  )
}