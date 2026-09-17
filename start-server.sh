#!/bin/bash
set -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$DIR"

export PATH="/Users/rapha/.gemini/antigravity/scratch/.tools/node/bin:$PATH"

echo "1. Nettoyage des processus..."
lsof -ti:3000 | xargs kill -9 2>/dev/null || true
pkill -9 -f "next dev" 2>/dev/null || true
pkill -9 -f "next-server" 2>/dev/null || true
sleep 1

echo "2. Lancement du serveur Next.js en arrière-plan découplé..."
nohup npm run dev > server.log 2>&1 &
PID=$!
echo "Serveur lancé avec le PID $PID"

echo "3. Attente du démarrage..."
for i in {1..20}; do
  if curl -s -I http://127.0.0.1:3000 | grep -q "200 OK"; then
    echo "Le serveur répond parfaitement sur http://localhost:3000 (HTTP 200 OK)"
    exit 0
  fi
  sleep 1
done

echo "Délai dépassé, affichage des logs :"
tail -n 25 server.log
exit 1
