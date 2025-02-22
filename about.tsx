import { View, Text, StyleSheet } from 'react-native';

export default function AboutUsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.description}>
        We are committed to providing a seamless online ordering experience, from browsing to delivery.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Our Mission</Text>
        <Text style={styles.cardText}>
          To offer a convenient, secure, and enjoyable shopping experience by connecting customers with the products they love.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Our Vision</Text>
        <Text style={styles.cardText}>
          To revolutionize online ordering, making it faster, more efficient, and accessible to everyone.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Our Values</Text>
        <Text style={styles.cardText}>
          We prioritize customer satisfaction, reliability, and transparency in all our services.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Our Growth</Text>
        <Text style={styles.cardText}>
          Over the years, we’ve expanded our offerings, constantly improving and adapting to meet customer needs.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F3FF',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4A4A4A',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFF',
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
    color: '#666',
  },
});
