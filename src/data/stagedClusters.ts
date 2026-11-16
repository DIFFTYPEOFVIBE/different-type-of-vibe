// src/data/stagedClusters.ts
// Programmatic SEO Staged Batch Cluster Ledger
// Managed automatically by scripts/staged_pseo_cluster_expander.py

export interface StagedClusterItem {
  type: 'vibe' | 'genre' | 'mood' | 'bpm' | 'key' | 'scene' | 'instrument' | 'blog';
  slug: string;
  batchId: number;
}

export const STAGED_CLUSTER_ITEMS: StagedClusterItem[] = [];
