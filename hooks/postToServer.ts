/**
 * Post data to your local server.
 * @param endpoint - API route on your server (e.g., '/api/room-mapping')
 * @param payload - Data to send
 */
export async function postToServer(endpoint: string, payload: Record<string, any>) {
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error(`Server responded with status ${res.status}`);
    }

    const data = await res.json();
    console.log('Server response:', data);
    return data;
  } catch (error) {
    console.error('Error posting to server:', error);
    throw error;
  }
}