export default function TerminalButton({ path }: { path: string }) {
    return (
        <div className="flex items-center space-x-2 pb-4 border-b border-gray-700">
            <span className="w-3 h-3 bg-red rounded-full"></span>
            <span className="w-3 h-3 bg-yellow rounded-full"></span>
            <span className="w-3 h-3 bg-green rounded-full"></span>
            <p className="ml-auto text-gray-400 text-sm">{path}</p>
        </div>
    )
}