export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/home',
      permanent: false, // Gunakan false agar tidak menjadi redirect permanen
    },
  };
}

export default function HomeRedirect() {
  return null; // Karena akan langsung redirect, tidak perlu render konten di sini
}
