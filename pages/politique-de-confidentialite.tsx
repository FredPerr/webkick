import Legal from '@/layouts/Legal'
import { Box } from '../components'
import { Text } from '@nextui-org/react'

export default function PolitiqueDeConfidentialite() {
    return (
        <Box css={{ mb: 100 }}>
            <Text h3 css={{ fs: 30, fontWeight: 500 }}>
                Politique de confidentialité
            </Text>
            <Text css={{ ta: 'justify' }}>
                Politique de confidentialité chez WebKick CA, nous nous
                engageons à protéger votre vie privée. La présente politique de
                confidentialité explique comment nous collectons, utilisons et
                partageons les informations vous concernant lorsque vous
                utilisez notre site web et notre formulaire de contact.
                <br />
                <strong>Les données que nous recueillons</strong>
                <br />
                Les informations que nous collectons lorsque vous utilisez le
                formulaire de contact de notre site Websont les suivantes :
                Votre nom, votre adresse électronique et le message que vous
                soumettez via le formulaire de contact. Nous ne recueillons pas
                d'autres informations vous concernant lorsque vous utilisez
                notre site web. <br />
                <strong>Comment nous utilisons vos informations</strong>
                <br />
                Nous utilisons les informations que vous formulaire de contact
                pour répondre à vos questions et demandes. demandes. Nous
                n'utilisons pas vos informations à d'autres fins.
                <br />
                <strong>Partage de vos informations</strong>
                <br />
                Nous ne partageons pas vos informations avec des tiers, sauf si
                cela est nécessaire pour répondre à vos demandes ou si cela est
                requis par la loi.
                <br />
                <strong>Conservation des données</strong>
                <br />
                Nous conservons les informations que vous fournissez via
                formulaire de contact aussi longtemps que nécessaire pour
                répondre à vos demandes et pendant une durée raisonnable par la
                suite.
                <br />
                <strong>Vos droits</strong>
                <br />
                Vous avez le droit de demander l'accès aux informations que nous
                recueillons à votre sujet, ainsi que de demander que nous
                corrigions ou supprimions toute inexactitude dans vos
                informations. Vous pouvez exercer ces droits en nous contactant
                via le formulaire de contact de notre site web.
                <br />
                <strong>
                    Modifications de notre politique de confidentialité
                </strong>
                <br />
                Nous pouvons mettre à jour cette politique de confidentialité de
                temps à autre. Nous vous encourageons à consulter régulièrement
                cette politique de confidentialité pour rester informés de la
                manière dont nous protégeons vos informations. Contactez-nous si
                questions ou préoccupations concernant notre politique de
                confidentialité ou les informations que nous recueillons à votre
                sujet, veuillez nous contacter par le biais du formulaire de
                contact sur notre site web.
            </Text>
        </Box>
    )
}

PolitiqueDeConfidentialite.layout = (page: React.ReactElement) => {
    return <Legal>{page}</Legal>
}
