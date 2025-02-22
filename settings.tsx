import { View, Text, StyleSheet } from 'react-native';

export default function ServicesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Online Ordering Services</Text>
      <Text style={styles.description}>
        Explore how we streamline the online ordering experience for you.
      </Text>

      <View style={styles.serviceCard}>
        <Text style={styles.serviceTitle}>Easy Ordering</Text>
        <Text style={styles.serviceText}>
          Simple and intuitive platform for placing your orders quickly and easily.
        </Text>
      </View>

      <View style={styles.serviceCard}>
        <Text style={styles.serviceTitle}>Fast Delivery</Text>
        <Text style={styles.serviceText}>
          Get your orders delivered swiftly with our trusted delivery partners.
        </Text>
      </View>

      <View style={styles.serviceCard}>
        <Text style={styles.serviceTitle}>Secure Payments</Text>
        <Text style={styles.serviceText}>
          Enjoy peace of mind with our secure online payment options.
        </Text>
      </View>

      <View style={styles.serviceCard}>
        <Text style={styles.serviceTitle}>Custom Orders</Text>
        <Text style={styles.serviceText}>
          Tailored online ordering solutions to meet your specific needs.
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
  serviceCard: {
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
  serviceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 5,
  },
  serviceText: {
    fontSize: 14,
    color: '#666',
  },
});
