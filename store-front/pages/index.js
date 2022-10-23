import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import StoreContext from "../context/store-context";
import MedusaLogo from "../public/mylogo.png";
import hero from "../public/hero_img.png";
import { BsArrowDown } from "react-icons/bs";
import styles from "../styles/landing-page.module.css";
import store from "../styles/store.module.css";
import footer from "../styles/footer.module.css";
import { createClient } from "../utils/client";
import { formatPrices } from "../utils/prices";

export default function Home({ products }) {
  const { cart } = useContext(StoreContext);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.left}>
            <h1 className={styles.title}>Furniture shop</h1>
            <p className={styles.text}>
              It is the place where you can find high quality Furniture in
              resonable prize
            </p>
            <div className={styles.btn_con}>
              <a href="#storeSection">
                <button className={styles.explore}>Let's explore</button>
              </a>
              <a
                href="https://github.com/utsavbhattarai007/devshop"
                target={"_blank"}
              >
                <button className={styles.github}>GitHub</button>
              </a>
            </div>
          </div>
          <div className={styles.right}>
            <Image src={hero} layout="responsive" className={styles.img} />
            <div className={styles.overlay}>
              <BsArrowDown />
            </div>
          </div>
        </div>

        <section id="storeSection" className={store.container}>
          <h1 className={store.title}>Check out our store</h1>
          <div className={store.products}>
            <div className={store.grid}>
              {products &&
                products.map((p) => {
                  return (
                    <div key={p.id} className={store.card}>
                      <Link
                        href={{
                          pathname: `/product/[id]`,
                          query: { id: p.id },
                        }}
                        passHref
                      >
                        <a target="_blank">
                          <h2>{p.title}</h2>
                          <div className={store.imgHolder}>
                            <Image
                              src={p.thumbnail}
                              alt="thumbnail"
                              width={250}
                              height={300}
                            ></Image>
                          </div>
                          <p>{p.description}</p>
                          <p style={{ color: "#8a4af3" }}>
                            {formatPrices(cart, p.variants[0])}
                          </p>
                        </a>
                      </Link>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </main>
      <footer className={footer.container}>
        <div className={footer.main}>
          <div className={footer.listA}>
            <Link href="/">
              <a style={{ width: "125px" }}>
                <Image src={MedusaLogo} height="40px" width="100%" alt="logo" />
              </a>
            </Link>
            <span>© 2022 Furniture Store – All Rights Reserved</span>
            <span>
              Catch us on{" "}
              <Link href="mailto:vanshajfirebase@gmail.com">
                <a style={{ fontWeight: "bold" }}>mail@aashishpanthi.info.np</a>
              </Link>
            </span>
          </div>
          <div className={footer.listA}>
            <h4>Docs</h4>
            <li>
              <Link href="https://docs.medusajs.com/tutorial/set-up-your-development-environment/">
                <a target="_blank">Tutorial</a>
              </Link>
            </li>
          </div>
          <div className={footer.listA}>
            <h4>Community</h4>
            <li>
              <Link href="https://twitter.com/medusajs">
                <a target="_blank">Twitter</a>
              </Link>
            </li>
            <li>
              <Link href="https://discord.com/invite/medusajs">
                <a target="_blank">Discord</a>
              </Link>
            </li>
          </div>
          <div className={footer.listA}>
            <h4>More</h4>
            <li>
              <Link href="https://medusajs.com/">
                <a target="_blank">Medusa</a>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/utsavbhattarai/devshop">
                <a target="_blank">GitHub Repo</a>
              </Link>
            </li>
          </div>
        </div>
      </footer>
    </div>
  );
}

export const getStaticProps = async () => {
  const client = createClient();
  const { products } = await client.products.list();

  return {
    props: {
      products,
    },
  };
};
