import { useState } from 'react';
import { Repo } from '../../queries/repos/types';
import {
  CardLayout,
  CardButton,
  Column,
  Row,
  Title,
  Topic,
  Icon
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
      <img src={preview} alt="the image must be this way src/assets/preview.jpg" width={100} height={100} onError={setDefault} style={{borderStyle: 'outset', borderRadius: 12, margin: 5}}/>
      <Column>
        <Title>{repo.name}</Title>
        <Icon src={icons[lang]} />
        <Row>{repo?.topics.map(topic => <Topic>{topic}</Topic>)}</Row>
      </Column>
      <Column>
        <Row>
          <CardButton onClick={() => goToRepo(repo.html_url)}>
            <Icon src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC+ElEQVR4nO2ZzWoUQRSFy53i3yuIiuBDRBITXCqK4CvoJiuFoA+iEcFniMaNglFByAuoceMigmOYpM7pe6ObgC23ZyZMKv2bpH8Cc6BgaLp77jdVdeueO85NNNFEnZeSc0o+V+CbkpqMwedFBWZd10XyspIflYwLxge713VRCkwrsFUCIk4GsCXeT7kuSby/puR2aQjuDt+ZmbE1L+TflCCXbJZ6vd5pG8mMka/C+4Rc6SSEAP+2gYdZzwj5OGWZXXddg9Aomi/x7HIA8rSZqPcHMnNQiNGPEIB8dU1LRK4qyYNCmPr9/tlgeUWuScVxfEKBz4eBMG1ubp4LQOia1DZ5IyXrLFR9j+5fWl/qiTgrAPJlMBtvbZaqvkeAN61udgW+jwcQeX+z6jsi4FFK+p1xTUrIP2NfvhrH8cnkOnBbgJ4CfQHuZj2vUTSf7Km9S/O9a1q7IMCq9/58Ehx5T4CdMcB+WQgFtkheahxEgbVciMG++V0GQuwcAqZdGxLyQQHEjgB3SkLMtgKxJ7gMCLs+useymZALxxbCEoB4f0vIdylnTv0QVoEOrahZUj+0p2u2nMpC2LKzPZTmPaRuCJIXM+1p8cYuBaHmHOvc2Ln29IgghFypNcXmOLtKECYh71spPrS7YrWTlR1a94mdBWG1k5UdoxO7DETnnJ2QC+MF4LGE0MBPJOmzYE/YcmoLYrqsPRXyZ+HGbtpD7HYAg+yU5+wE+FUiO4lrWhqcE0X2dHgyryv5wz7btXh9/VSQYqWNhnI8PvL6TlkyoLbt6WIAslT1HcMCMKydXrjGPQT3/JKVSwVLza13B9VO2rEArA9b6fk0Z0d+qi/ikiAbGxtnDgmBKIquuKalg7K88tLKcXbNdjwyNzvw2hWok/ZUw67eIKgneX2nzkGMZP/ZpWSdZcs8tmeSprLVYWEHsEsQJgAXrN+U6j1yxrA2m3Ndkng/VfXPytb6TkUyy5m6zJq2p0clS6EKPEss6eCcac6eTjTRRO4o9B8QyoRfWEKiuQAAAABJRU5ErkJggg==" />
          </CardButton>
          <CardButton onClick={handleToggleFavorite}>
            {!isFavorite ? <Icon src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAxklEQVR4nO2XQQ7DIAwE/eY59dH9Q6tK6aVqSwIYjNmROII9sZ0EM7EZ3O6P17LVQSJBK7FsZZBIMJavCIWElxFCIsFAFQkCF4c47NAjkWAwuyIcB7au6fHJJmKLQjqRN71axRtKeaYRiSpGax5pRGaJ4R0njcgnvQNNa2Ek8h1VxHZvLQa9tcwbiZwEVSToMOL9i1Kzp2Wv9WY7Ef4kfkUKiVQ+mdr2ObuP3heq1oRCiuBw8fl1JhIptMCIjyIeMdOICBvLE7sMm2zJuxfRAAAAAElFTkSuQmCC" /> : <Icon src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAkklEQVR4nO2VQQqAMAwE8xz//4x8aj0JUpCC2iYhM5Bzd7opNQOAJcgP3ceqIQSCKduAhuDlRIRAMCUb0CR0ehkhEEyKBvQyRNQYAp6sgZHogPr6XqIDq73ASPobn4GABzdwp8zaPIGA00DTFVLVP+ACAaeBpiukTcG1SuTPQxFo1YA27ahWnYNApgZsM0IAoAcnAN11CCMxTicAAAAASUVORK5CYII=" />}
          </CardButton>
        </Row>
      </Column>
    </CardLayout>
  )
}