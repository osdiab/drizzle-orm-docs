import React from 'react';

import styles from './LandingPage.module.css';

import Header from './LandingComponents/Header/Header';
import Advantages from './LandingComponents/Advantages/Advantages';
import Supporting from './LandingComponents/Supporting/Supporting';
import Runtimes from './LandingComponents/Supporting/Runtimes';
import Databases from './LandingComponents/Supporting/Databases';
import Twits from './LandingComponents/Twits/Twits';

const LandingPage = () => {
  const runtimes: string[] = ['Cloudflare Workers', 'Supabase functions', 'Vercel functions', 'Deno deploy', 'Bun', 'Lagon', 'ElectronJS', 'Browser'];
  const databases: string[] = ['Neon', 'PlanetScale', 'Vercel storage', 'Turso', 'Supabase', 'PostgreSQL', 'MySQL', 'SQLite', 'Web SQLite'];
  return (
    <div className={styles.wrap}>
      <Header />
      <Advantages />
      <Supporting imageType="liveontheedge" title="Live on the edge" description="We support every major serverful and serveless runtime" items={runtimes} data={Runtimes} />
      <Supporting imageType="connecteverywhere" title="Connect to any database" description="We support all platform-specific, tcp, http and websocket based drivers" items={databases} data={Databases} />
      <Twits />
    </div>
  );
};

export default LandingPage;
