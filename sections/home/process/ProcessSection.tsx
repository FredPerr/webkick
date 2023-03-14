import SectionTitle from '@/components/section/SectionTitle'
import styles from './ProcessSection.module.scss'
import LightBulbIllustration from '@/components/illustrations/LightBulbIllustration'
import MeasureIllustration from '@/components/illustrations/MeasureIllustration'
import ThunderstormIllustration from '@/components/illustrations/ThunderstormIllustration'
import ConversationIllustration from '@/components/illustrations/ConversationIllustration'
import { Button } from 'react-bootstrap'
import Image from 'next/image'
import ShapeCircleSvg from '@/public/images/shapes/circle.svg?url'
import ShapeSquareSvg from '@/public/images/shapes/square.svg?url'
import ShapePentagonSvg from '@/public/images/shapes/pentagon.svg?url'
import ShapeTriangleSvg from '@/public/images/shapes/triangle.svg?url'

export default function ProcessSection() {
  return (
    <section className={styles.section}>
      <SectionTitle
        title="Toujours à votre écoute et centrés sur l’objectif"
        subtitle="Basé sur une solution prouvée et efficace"
      />
      <div className={styles.container}>
        <div className={styles.row}>
          <LightBulbIllustration className={styles.item_img} />
          <ProcessItemText
            title="1. Faites-nous part de votre vision"
            subtitle="Nous évaluerons votre demande ensemble pour vous offrir un service adapté à vos besoins"
          >
            <div>
              <p className={styles.item_text} style={{ marginBottom: 0 }}>
                Demandez-nous:
              </p>
              <ul className={styles.item_text}>
                <li>un nouveau site Web</li>
                <li>une boutique en ligne</li>
                <li>l’automatisation d’un processus redondant</li>
                <li>une fonctionalité particulière</li>
              </ul>
            </div>
          </ProcessItemText>
        </div>
        <div className={styles.row + ' ' + styles.col_reverse}>
          <ProcessItemText
            title="2. Conception de votre site."
            subtitle="Nous recueillons vos commentaires avant la prochaine étape et nous retouchons le site jusqu’à ce qu’il vous convienne parfaitement."
          >
            <div>
              <p className={styles.item_text} style={{ marginBottom: 0 }}>
                Nous allons au-delà des standards des sites modernes en{' '}
                {new Date().getFullYear()}:
              </p>
              <ul className={styles.item_text}>
                <li>Adapté pour mobile</li>
                <li>Optimisations pour la recherche (SEO)</li>
                <li>Encryption et protection du site</li>
                <li>Interface intuitive</li>
                <li>Traduction optionelle</li>
              </ul>
            </div>
          </ProcessItemText>
          <MeasureIllustration className={styles.item_img} />
        </div>
        <div className={styles.row}>
          <ThunderstormIllustration className={styles.item_img} />
          <ProcessItemText
            title="3. Hébergement de votre site"
            subtitle="Nous hébergons les sites Web sur des serveurs performants et fiables."
          >
            <div>
              <p className={styles.item_text} style={{ marginBottom: 0 }}>
                Toutes les technicalités sont gérées par nous:
              </p>

              <ul className={styles.item_text}>
                <li>Certification SSL (https)</li>
                <li>Gestion du nom de domaine (serveur DNS)</li>
                <li>Implémentation de base(s) de données</li>
                <li>Maintenance régulière des serveurs</li>
                <li>Surveillance continue de l’état des services</li>
                <li>Sauvegardes hebdomadaires des données</li>
              </ul>
            </div>
          </ProcessItemText>
        </div>
        <div className={styles.row + ' ' + styles.col_reverse}>
          <ProcessItemText
            title="4. Maintenance continue et support illimité"
            subtitle="Avec notre maintenance continue, vous payez pour un service qui restera actif et productif."
          >
            <div>
              <p className={styles.item_text}>
                Vous n’avez pas le temps et l’envie de plonger dans toutes les
                technicalités des sites Web. Nous assumons cette responsabilité
                et nous gardons votre site sur pied à{' '}
                <strong>un taux de +99.9% du temps</strong>.
              </p>
            </div>
          </ProcessItemText>
          <ConversationIllustration className={styles.item_img} />
        </div>
      </div>
      <div className={styles.button_container}>
        <Button>Obtenir ma soumission</Button>
        <Button variant="secondary">Voir notre tarification</Button>
      </div>
      <Image
        src={ShapeCircleSvg}
        width={300}
        height={300}
        alt="circle"
        className={styles.shape_circle}
      />
      <Image
        src={ShapeTriangleSvg}
        width={300}
        height={300}
        alt="triangle"
        className={styles.shape_triangle}
      />
      <Image
        src={ShapeSquareSvg}
        width={300}
        height={300}
        alt="square"
        className={styles.shape_square}
      />
      <Image
        src={ShapePentagonSvg}
        width={300}
        height={300}
        alt="pentagon"
        className={styles.shape_pentagon}
      />
    </section>
  )
}

interface ProcessTextProps {
  title: string
  children: React.ReactNode
  subtitle: string
}

function ProcessItemText(props: ProcessTextProps) {
  return (
    <div className={styles.item_text_container}>
      <h3 className={styles.item_text_title}>{props.title}</h3>
      {props.children}
      <p className={styles.item_text_subtitle}>{props.subtitle}</p>
    </div>
  )
}
