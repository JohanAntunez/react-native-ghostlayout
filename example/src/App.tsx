import { useEffect, useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  GhostCircle,
  GhostImage,
  GhostLayout,
  GhostText,
} from 'react-native-ghostlayout';

const DATA = {
  avatar:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
  name: 'Carlos Mendoza',
  role: 'Product Designer · 2nd',
  time: '3 días',
  body: 'He estado explorando nuevas formas de crear interfaces más limpias y accesibles. Este es mi primer artículo — espero que te sea útil. ¡Déjame tus comentarios!',
  cover:
    'https://images.unsplash.com/photo-1611162617474-5b21e939e986?w=800&q=80',
};

function CardSkeleton() {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <GhostCircle size={48} />
        <View style={styles.headerText}>
          <GhostText width="55%" height={14} />
          <GhostText width="40%" height={12} />
          <GhostText width="25%" height={11} />
        </View>
      </View>

      <GhostText
        lines={3}
        widths={['100%', '80%', '65%']}
        height={13}
        gap={8}
        style={styles.bodyText}
      />

      <GhostImage
        width="100%"
        height={180}
        borderRadius={12}
        style={styles.cover}
      />

      <View style={styles.reactionsRow}>
        <GhostText width={60} height={12} />
        <GhostText width={80} height={12} />
      </View>
    </View>
  );
}

function CardContent() {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: DATA.avatar }} style={styles.avatar} />
        <View style={styles.headerText}>
          <Text style={styles.name}>{DATA.name}</Text>
          <Text style={styles.role}>{DATA.role}</Text>
          <Text style={styles.time}>{DATA.time}</Text>
        </View>
      </View>

      <Text style={styles.bodyContent}>{DATA.body}</Text>

      <Image source={{ uri: DATA.cover }} style={styles.coverImage} />

      <View style={styles.reactionsRow}>
        <Text style={styles.reactions}>👍❤️ 174</Text>
        <Text style={styles.reactions}>20 comentarios</Text>
      </View>
    </View>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.heading}>react-native-ghostlayout</Text>
      <Text style={styles.subtitle}>
        Compón tu skeleton con componentes específicos.
      </Text>

      <GhostLayout
        loading={loading}
        boneColor="#D8D8D8"
        skeleton={<CardSkeleton />}
      >
        <CardContent />
      </GhostLayout>

      <Pressable onPress={() => setLoading((v) => !v)} style={styles.button}>
        <Text style={styles.buttonLabel}>
          {loading ? 'Ver contenido' : 'Ver skeleton'}
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    backgroundColor: '#F3F2EF',
    paddingHorizontal: 16,
    paddingTop: 64,
    paddingBottom: 40,
  },
  heading: {
    color: '#191919',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
  },
  subtitle: {
    color: '#666666',
    fontSize: 14,
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 14,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#DDD',
  },
  headerText: {
    flex: 1,
    gap: 5,
    paddingTop: 2,
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
    color: '#191919',
  },
  role: {
    fontSize: 13,
    color: '#555555',
  },
  time: {
    fontSize: 12,
    color: '#999999',
  },

  bodyText: {
    marginBottom: 14,
  },
  bodyContent: {
    fontSize: 14,
    color: '#333333',
    lineHeight: 21,
    marginBottom: 14,
  },

  cover: {
    marginBottom: 12,
  },
  coverImage: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    backgroundColor: '#DDD',
    marginBottom: 12,
  },

  reactionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reactions: {
    fontSize: 13,
    color: '#666666',
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#0A66C2',
    borderRadius: 24,
    marginTop: 20,
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  buttonLabel: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
});
