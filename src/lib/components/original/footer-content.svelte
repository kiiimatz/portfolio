<script lang="ts">
    function getYear(): number {
        const date = new Date()
        return date.getFullYear()
    }
</script>

<div class="w-full justify-center items-center flex writer text-[12px] h-8 text-primary/40">
    <p>© {getYear()} kiiimatz. All Rights Reserved.</p>
</div>
