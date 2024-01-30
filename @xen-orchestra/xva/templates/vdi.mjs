export const DEFAULT_VDI = {
  class: 'VDI',
  snapshot: {
    allow_caching: false,
    cbt_enabled: false,
    descriptionLabel: 'description',
    is_a_snapshot: false,
    managed: true,
    metrics: 'OpaqueRef:NULL',
    missing: false,
    name_label: 'name_label',
    on_boot: 'persist',
    other_config: {},
    parent: 'OpaqueRef:NULL',
    physical_utilisation: 1024 * 1024,
    read_only: false,
    sharable: false,
    snapshot_of: 'OpaqueRef:NULL',
    snapshots: [],
    SR: 'OpaqueRef:NULL',
    storage_lock: false,
    tags: [],
    type: 'user',
    uuid: '',
    vbds: [],
    virtual_size: 0,
    xenstore_data: {},
  },
}