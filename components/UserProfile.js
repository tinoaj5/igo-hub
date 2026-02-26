function UserProfile() {
  const [profile, setProfileState] = React.useState(() => (typeof getProfile === "function" ? getProfile() : {}));
  const [saving, setSaving] = React.useState(false);
  const [msg, setMsg] = React.useState("");

  function onChange(key) {
    return (e) => {
      const val = e.target.value;
      setProfileState((p) => ({ ...p, [key]: val }));
    };
  }

  async function onSave() {
    setMsg("");
    setSaving(true);
    try {
      const res = await Backend.saveProfile(profile);
      if (res?.ok) {
        setMsg("Saved ✔");
        setProfileState(typeof getProfile === "function" ? getProfile() : profile);
      } else {
        setMsg(res?.error || "Could not save");
      }
    } catch (e) {
      setMsg(Backend.niceError(e, "Could not save"));
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-2xl font-semibold">Your profile</h1>
      <p className="mt-1 text-textMuted">This info is used for job matching and contact during a walk.</p>

      <div className="mt-6 grid gap-4 rounded-3xl border border-white/10 bg-surface p-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <label className="grid gap-1">
            <span className="text-sm text-textMuted">Email</span>
            <input
              className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 outline-none"
              value={profile.email || ""}
              onChange={onChange("email")}
              disabled
            />
          </label>
          <label className="grid gap-1">
            <span className="text-sm text-textMuted">Role</span>
            <select
              className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 outline-none"
              value={profile.role || ""}
              onChange={onChange("role")}
            >
              <option value="">Select…</option>
              <option value="owner">Owner</option>
              <option value="walker">Walker</option>
              <option value="both">Both</option>
            </select>
          </label>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <label className="grid gap-1">
            <span className="text-sm text-textMuted">Full name (optional)</span>
            <input
              className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 outline-none"
              value={profile.name || ""}
              onChange={onChange("name")}
              placeholder="Your name"
            />
          </label>
          <label className="grid gap-1">
            <span className="text-sm text-textMuted">City</span>
            <input
              className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 outline-none"
              value={profile.city || ""}
              onChange={onChange("city")}
              placeholder="Lausanne"
            />
          </label>
        </div>

        <label className="grid gap-1">
          <span className="text-sm text-textMuted">Address (optional)</span>
          <input
            className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 outline-none"
            value={profile.address || ""}
            onChange={onChange("address")}
            placeholder="Street + number"
          />
        </label>

        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <button
            onClick={onSave}
            disabled={saving}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 font-medium text-black disabled:opacity-60"
          >
            {saving ? "Saving…" : "Save"}
          </button>
          {msg ? <div className="text-sm text-textMuted">{msg}</div> : null}
        </div>
      </div>
    </div>
  );
}
