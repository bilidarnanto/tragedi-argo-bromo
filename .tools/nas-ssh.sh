#!/usr/bin/env bash
# Wrapper SSH untuk git remote ke NAS BPF (password dari ssh-nas/credentials.env)
set -euo pipefail
source /home/it/ssh-nas/credentials.env
exec sshpass -p "$NAS_PASS" ssh \
  -o StrictHostKeyChecking=no \
  -o UserKnownHostsFile=/home/it/ssh-nas/known_hosts \
  -p "$NAS_PORT" "$@"
